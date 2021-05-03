import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent476Component } from './test-component476.component';

describe('TestComponent476Component', () => {
  let component: TestComponent476Component;
  let fixture: ComponentFixture<TestComponent476Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent476Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
