import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2174Component } from './test-component2174.component';

describe('TestComponent2174Component', () => {
  let component: TestComponent2174Component;
  let fixture: ComponentFixture<TestComponent2174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
