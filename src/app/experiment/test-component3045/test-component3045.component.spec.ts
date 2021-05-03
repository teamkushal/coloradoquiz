import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3045Component } from './test-component3045.component';

describe('TestComponent3045Component', () => {
  let component: TestComponent3045Component;
  let fixture: ComponentFixture<TestComponent3045Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3045Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
