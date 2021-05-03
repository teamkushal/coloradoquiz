import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3972Component } from './test-component3972.component';

describe('TestComponent3972Component', () => {
  let component: TestComponent3972Component;
  let fixture: ComponentFixture<TestComponent3972Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3972Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
