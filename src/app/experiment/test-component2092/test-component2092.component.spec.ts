import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2092Component } from './test-component2092.component';

describe('TestComponent2092Component', () => {
  let component: TestComponent2092Component;
  let fixture: ComponentFixture<TestComponent2092Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2092Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
