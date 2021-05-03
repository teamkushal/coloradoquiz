import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2208Component } from './test-component2208.component';

describe('TestComponent2208Component', () => {
  let component: TestComponent2208Component;
  let fixture: ComponentFixture<TestComponent2208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
