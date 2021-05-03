import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent712Component } from './test-component712.component';

describe('TestComponent712Component', () => {
  let component: TestComponent712Component;
  let fixture: ComponentFixture<TestComponent712Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent712Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
