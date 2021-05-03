import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent26Component } from './test-component26.component';

describe('TestComponent26Component', () => {
  let component: TestComponent26Component;
  let fixture: ComponentFixture<TestComponent26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
