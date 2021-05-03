import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3142Component } from './test-component3142.component';

describe('TestComponent3142Component', () => {
  let component: TestComponent3142Component;
  let fixture: ComponentFixture<TestComponent3142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
