import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3608Component } from './test-component3608.component';

describe('TestComponent3608Component', () => {
  let component: TestComponent3608Component;
  let fixture: ComponentFixture<TestComponent3608Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3608Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
