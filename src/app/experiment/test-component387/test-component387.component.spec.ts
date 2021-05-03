import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent387Component } from './test-component387.component';

describe('TestComponent387Component', () => {
  let component: TestComponent387Component;
  let fixture: ComponentFixture<TestComponent387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent387Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
