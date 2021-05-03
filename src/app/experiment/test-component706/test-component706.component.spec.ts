import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent706Component } from './test-component706.component';

describe('TestComponent706Component', () => {
  let component: TestComponent706Component;
  let fixture: ComponentFixture<TestComponent706Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent706Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
