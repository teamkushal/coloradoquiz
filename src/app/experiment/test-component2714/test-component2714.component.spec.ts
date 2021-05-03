import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2714Component } from './test-component2714.component';

describe('TestComponent2714Component', () => {
  let component: TestComponent2714Component;
  let fixture: ComponentFixture<TestComponent2714Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2714Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
