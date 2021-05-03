import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2826Component } from './test-component2826.component';

describe('TestComponent2826Component', () => {
  let component: TestComponent2826Component;
  let fixture: ComponentFixture<TestComponent2826Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2826Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
