import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent721Component } from './test-component721.component';

describe('TestComponent721Component', () => {
  let component: TestComponent721Component;
  let fixture: ComponentFixture<TestComponent721Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent721Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
