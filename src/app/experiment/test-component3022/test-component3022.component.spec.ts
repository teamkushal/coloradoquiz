import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3022Component } from './test-component3022.component';

describe('TestComponent3022Component', () => {
  let component: TestComponent3022Component;
  let fixture: ComponentFixture<TestComponent3022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
