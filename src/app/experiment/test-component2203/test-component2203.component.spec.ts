import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2203Component } from './test-component2203.component';

describe('TestComponent2203Component', () => {
  let component: TestComponent2203Component;
  let fixture: ComponentFixture<TestComponent2203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2203Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
