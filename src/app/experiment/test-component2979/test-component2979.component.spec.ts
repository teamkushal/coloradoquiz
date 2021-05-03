import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2979Component } from './test-component2979.component';

describe('TestComponent2979Component', () => {
  let component: TestComponent2979Component;
  let fixture: ComponentFixture<TestComponent2979Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2979Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
