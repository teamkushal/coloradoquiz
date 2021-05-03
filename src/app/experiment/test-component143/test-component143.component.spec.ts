import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent143Component } from './test-component143.component';

describe('TestComponent143Component', () => {
  let component: TestComponent143Component;
  let fixture: ComponentFixture<TestComponent143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
