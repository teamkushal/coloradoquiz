import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2463Component } from './test-component2463.component';

describe('TestComponent2463Component', () => {
  let component: TestComponent2463Component;
  let fixture: ComponentFixture<TestComponent2463Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2463Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
