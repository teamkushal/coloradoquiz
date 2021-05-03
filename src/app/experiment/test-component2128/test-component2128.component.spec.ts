import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2128Component } from './test-component2128.component';

describe('TestComponent2128Component', () => {
  let component: TestComponent2128Component;
  let fixture: ComponentFixture<TestComponent2128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
