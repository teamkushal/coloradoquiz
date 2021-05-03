import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2512Component } from './test-component2512.component';

describe('TestComponent2512Component', () => {
  let component: TestComponent2512Component;
  let fixture: ComponentFixture<TestComponent2512Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2512Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
