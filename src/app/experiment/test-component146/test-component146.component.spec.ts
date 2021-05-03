import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent146Component } from './test-component146.component';

describe('TestComponent146Component', () => {
  let component: TestComponent146Component;
  let fixture: ComponentFixture<TestComponent146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
