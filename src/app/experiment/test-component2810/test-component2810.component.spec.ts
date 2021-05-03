import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2810Component } from './test-component2810.component';

describe('TestComponent2810Component', () => {
  let component: TestComponent2810Component;
  let fixture: ComponentFixture<TestComponent2810Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2810Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
