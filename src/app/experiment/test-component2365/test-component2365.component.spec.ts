import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2365Component } from './test-component2365.component';

describe('TestComponent2365Component', () => {
  let component: TestComponent2365Component;
  let fixture: ComponentFixture<TestComponent2365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2365Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
