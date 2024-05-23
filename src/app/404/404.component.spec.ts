import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOFComponent } from './404.component';

describe('404Component', () => {
  let component: FOFComponent;
  let fixture: ComponentFixture<FOFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FOFComponent]
    });
    fixture = TestBed.createComponent(FOFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
