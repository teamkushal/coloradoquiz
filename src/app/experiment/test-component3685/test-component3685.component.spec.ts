import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3685Component } from './test-component3685.component';

describe('TestComponent3685Component', () => {
  let component: TestComponent3685Component;
  let fixture: ComponentFixture<TestComponent3685Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3685Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
