import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2048Component } from './test-component2048.component';

describe('TestComponent2048Component', () => {
  let component: TestComponent2048Component;
  let fixture: ComponentFixture<TestComponent2048Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2048Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
