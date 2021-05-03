import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2503Component } from './test-component2503.component';

describe('TestComponent2503Component', () => {
  let component: TestComponent2503Component;
  let fixture: ComponentFixture<TestComponent2503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2503Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
