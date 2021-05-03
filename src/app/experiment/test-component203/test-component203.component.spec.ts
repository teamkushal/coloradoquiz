import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent203Component } from './test-component203.component';

describe('TestComponent203Component', () => {
  let component: TestComponent203Component;
  let fixture: ComponentFixture<TestComponent203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent203Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
