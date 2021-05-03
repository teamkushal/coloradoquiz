import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent550Component } from './test-component550.component';

describe('TestComponent550Component', () => {
  let component: TestComponent550Component;
  let fixture: ComponentFixture<TestComponent550Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent550Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
