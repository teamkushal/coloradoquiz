import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent665Component } from './test-component665.component';

describe('TestComponent665Component', () => {
  let component: TestComponent665Component;
  let fixture: ComponentFixture<TestComponent665Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent665Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
