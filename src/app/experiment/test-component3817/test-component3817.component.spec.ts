import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3817Component } from './test-component3817.component';

describe('TestComponent3817Component', () => {
  let component: TestComponent3817Component;
  let fixture: ComponentFixture<TestComponent3817Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3817Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
