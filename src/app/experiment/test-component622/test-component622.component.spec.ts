import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent622Component } from './test-component622.component';

describe('TestComponent622Component', () => {
  let component: TestComponent622Component;
  let fixture: ComponentFixture<TestComponent622Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent622Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
