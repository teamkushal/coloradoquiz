import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2531Component } from './test-component2531.component';

describe('TestComponent2531Component', () => {
  let component: TestComponent2531Component;
  let fixture: ComponentFixture<TestComponent2531Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2531Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
