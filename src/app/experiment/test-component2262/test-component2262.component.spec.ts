import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2262Component } from './test-component2262.component';

describe('TestComponent2262Component', () => {
  let component: TestComponent2262Component;
  let fixture: ComponentFixture<TestComponent2262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2262Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
