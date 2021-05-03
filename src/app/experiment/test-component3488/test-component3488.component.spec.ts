import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3488Component } from './test-component3488.component';

describe('TestComponent3488Component', () => {
  let component: TestComponent3488Component;
  let fixture: ComponentFixture<TestComponent3488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3488Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
