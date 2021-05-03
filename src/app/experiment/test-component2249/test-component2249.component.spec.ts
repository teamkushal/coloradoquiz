import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2249Component } from './test-component2249.component';

describe('TestComponent2249Component', () => {
  let component: TestComponent2249Component;
  let fixture: ComponentFixture<TestComponent2249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
