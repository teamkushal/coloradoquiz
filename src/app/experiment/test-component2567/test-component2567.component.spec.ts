import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2567Component } from './test-component2567.component';

describe('TestComponent2567Component', () => {
  let component: TestComponent2567Component;
  let fixture: ComponentFixture<TestComponent2567Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2567Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
