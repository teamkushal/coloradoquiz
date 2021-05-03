import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2830Component } from './test-component2830.component';

describe('TestComponent2830Component', () => {
  let component: TestComponent2830Component;
  let fixture: ComponentFixture<TestComponent2830Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2830Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
