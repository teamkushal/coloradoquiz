import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2935Component } from './test-component2935.component';

describe('TestComponent2935Component', () => {
  let component: TestComponent2935Component;
  let fixture: ComponentFixture<TestComponent2935Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2935Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
