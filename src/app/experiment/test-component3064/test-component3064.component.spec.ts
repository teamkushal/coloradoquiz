import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3064Component } from './test-component3064.component';

describe('TestComponent3064Component', () => {
  let component: TestComponent3064Component;
  let fixture: ComponentFixture<TestComponent3064Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3064Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
