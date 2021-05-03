import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2769Component } from './test-component2769.component';

describe('TestComponent2769Component', () => {
  let component: TestComponent2769Component;
  let fixture: ComponentFixture<TestComponent2769Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2769Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
