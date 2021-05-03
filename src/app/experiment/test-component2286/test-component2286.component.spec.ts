import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2286Component } from './test-component2286.component';

describe('TestComponent2286Component', () => {
  let component: TestComponent2286Component;
  let fixture: ComponentFixture<TestComponent2286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2286Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
