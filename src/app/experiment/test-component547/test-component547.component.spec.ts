import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent547Component } from './test-component547.component';

describe('TestComponent547Component', () => {
  let component: TestComponent547Component;
  let fixture: ComponentFixture<TestComponent547Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent547Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
