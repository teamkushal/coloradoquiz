import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent972Component } from './test-component972.component';

describe('TestComponent972Component', () => {
  let component: TestComponent972Component;
  let fixture: ComponentFixture<TestComponent972Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent972Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
