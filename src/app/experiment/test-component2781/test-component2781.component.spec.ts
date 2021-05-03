import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2781Component } from './test-component2781.component';

describe('TestComponent2781Component', () => {
  let component: TestComponent2781Component;
  let fixture: ComponentFixture<TestComponent2781Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2781Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
