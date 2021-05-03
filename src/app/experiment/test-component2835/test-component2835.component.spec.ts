import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2835Component } from './test-component2835.component';

describe('TestComponent2835Component', () => {
  let component: TestComponent2835Component;
  let fixture: ComponentFixture<TestComponent2835Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2835Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
