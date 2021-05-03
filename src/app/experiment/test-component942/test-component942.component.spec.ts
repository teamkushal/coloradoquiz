import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent942Component } from './test-component942.component';

describe('TestComponent942Component', () => {
  let component: TestComponent942Component;
  let fixture: ComponentFixture<TestComponent942Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent942Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
