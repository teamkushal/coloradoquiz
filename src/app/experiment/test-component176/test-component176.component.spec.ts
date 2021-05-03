import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent176Component } from './test-component176.component';

describe('TestComponent176Component', () => {
  let component: TestComponent176Component;
  let fixture: ComponentFixture<TestComponent176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
