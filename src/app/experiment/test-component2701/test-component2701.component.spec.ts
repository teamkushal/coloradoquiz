import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2701Component } from './test-component2701.component';

describe('TestComponent2701Component', () => {
  let component: TestComponent2701Component;
  let fixture: ComponentFixture<TestComponent2701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2701Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
